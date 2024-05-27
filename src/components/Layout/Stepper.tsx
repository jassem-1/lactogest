import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/Button';
import {
  Stepper,
  StepperFooter,
  StepperItem,
  StepperProps,
  useStepper,
} from '@/components/ui';

import {
  GeneralInformation,
  HealthOffer,
  HealthOfferSheet,
  ProductsAndQuestions,
  Validation,
} from '../devis';

import { CheckCircle, FileQuestion, Tags, Text } from 'lucide-react';
import { boughtPacks } from '../devis/dummyData';
import { useRouterCompanyInfo } from '@/hooks/useAppQueryConfig';
import { api } from '@/api';

const stepsTabs: StepperProps['steps'] = [
  { label: 'Informations Générales', description: 'étape 1', icon: <Text /> },
  {
    label: 'Produits et questions',
    description: 'étape 2',
    icon: <FileQuestion />,
  },
  { label: 'Offres Santé', description: 'étape 3', icon: <Tags /> },
  { label: 'Validation', description: 'étape 4', icon: <CheckCircle /> },
];

export default function DevisStepper() {
  const { nextStep, prevStep } = useStepper();
  const { setStep } = useStepper();

  const router = useRouter();

  const { siret } = useRouterCompanyInfo();

  const currentStep = router.query.step || 1;

  const [boughtPacks, setBoughtPacks] = useState<boughtPacks[]>([]);
  const [showButton, setShowButton] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [inputValuesNb, setInputValuesNb] = useState({
    nbCadre: 0,
    nbNonCadre: 0,
    cadreAge: 0,
    nonCadreAge: 0,
    nbCadresWithFam: 0,
    nbNonCadresWithFam: 0,
  });
  const [modulationVal, setModulationVal] = useState({
    commission: 0,
    reduction: 0,
    promotionCode: '',
  });

  const { data: company } = useQuery({
    queryKey: ['company', siret],
    enabled: !!siret,
    queryFn: () => api.company.getSiretByID(siret!),
  });

  console.log('COMPANY >>> ', company);

  const handleNextStepClick = () => {
    router.push({ query: { step: parseInt(currentStep as string) + 1 } });
  };

  const handlePervStepClick = () => {
    router.push({ query: { step: parseInt(currentStep as string) - 1 } });
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInputValuesNb({
      ...inputValuesNb,
      [name]: parseInt(value, 10),
    });
  };

  const handleModulationValChange = (event: any) => {
    const { name, value } = event.target;
    setModulationVal({
      ...modulationVal,
      [name]: value,
    });
  };
  const resetModulationValChange = () => {
    setModulationVal({
      commission: 0,
      reduction: 0,
      promotionCode: '',
    });
  };

  const handleShowInfo = () => {
    setShowInfo(true);
  };

  const handleOpenSheet = () => setOpenSheet(true);

  const handleBuy = (pack: any, selectedStructureCotisation: any) => {
    const item = {
      ...pack,
      selectedStructureCotisation,
    };

    const boughtPack = boughtPacks.find(
      (boughtPack) => boughtPack.college === pack.college,
    );

    if (boughtPack) {
      const updatedBoughtPacks = boughtPacks.map((bPItem) => {
        if (bPItem.college === boughtPack.college) {
          return item;
        } else {
          return bPItem;
        }
      });
      setBoughtPacks(updatedBoughtPacks);
      toast.success(`le pack est remplacé avec succès`);
    } else {
      setBoughtPacks([...boughtPacks, item]);
      toast.info(`vous avez ajouter le pack ${item.nom}`);
    }
    setShowButton(true);
  };

  const handleReturn = (item: any) => {
    setBoughtPacks(boughtPacks.filter((pack: any) => pack !== item));
    if (boughtPacks.length === 1) {
      setShowButton(false);
    }
    toast.error(`vous avez supprimé le pack ${item.nom}.`);
  };

  useEffect(() => {
    setStep(parseInt(currentStep as string) - 1);
  }, [currentStep, setStep]);

  return (
    <div className="flex-1 flex w-full flex-col overflow-hidden">
      <Stepper
        className="flex-1 flex flex-col overflow-hidden"
        initialStep={parseInt(currentStep as string) - 1}
        steps={stepsTabs}
      >
        <StepperItem className="overflow-hidden">
          <GeneralInformation
            company={company}
            showInfo={showInfo}
            handleShowInfo={handleShowInfo}
            onNext={() => {
              nextStep();
              handleNextStepClick();
            }}
          />
        </StepperItem>
        <StepperItem className="overflow-hidden">
          {/* <ProductsAndQuestions */}
          {/*   handleInputChange={handleInputChange} */}
          {/*   inputValuesNb={inputValuesNb} */}
          {/* /> */}
          <div>
            <p>Critéres</p>
          </div>
        </StepperItem>
        <StepperItem>
          <>
            <HealthOffer
              handleSheet={() => handleOpenSheet()}
              handleBuy={handleBuy}
              boughtPacks={boughtPacks}
              showButton={showButton}
              inputValuesNb={inputValuesNb}
              handleInputChange={handleInputChange}
              modulationVal={modulationVal}
              handleModulationValChange={handleModulationValChange}
              resetModulationValChange={resetModulationValChange}
            />

            <HealthOfferSheet
              open={openSheet}
              onClose={() => setOpenSheet(false)}
              boughtPacks={boughtPacks}
              handleReturn={handleReturn}
              modulationVal={modulationVal}
            />
          </>
        </StepperItem>
        <StepperItem>
          <Validation boughtPacks={boughtPacks} />
        </StepperItem>

        {currentStep != 1 ? (
          <StepperFooter>
            <>
              {currentStep !== '4' ? (
                <div className="flex items-center justify-end gap-2">
                  <Button
                    disabled={currentStep == '1'}
                    variant={'outline'}
                    onClick={() => {
                      prevStep();
                      handlePervStepClick();
                    }}
                  >
                    Précédent
                  </Button>

                  <Button
                    variant={'outline'}
                    onClick={() => {
                      if (currentStep === '5') {
                        router.push({
                          pathname: '/devis/[id]/subscription',
                          query: { id: '1', step: 1 },
                        });
                      } else {
                        nextStep();
                        handleNextStepClick();
                      }
                    }}
                  >
                    Valider
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <Button variant={'ghost'} onClick={() => router.push('/')}>
                    Faire un nouveau devis
                  </Button>
                  <div className=" flex gap-4">
                    <Button
                      variant={'outline'}
                      onClick={() => {
                        prevStep();
                        handlePervStepClick();
                      }}
                    >
                      Obtenir mon devis
                    </Button>

                    <Button
                      variant={'outline'}
                      onClick={() => {
                        if (currentStep === '4') {
                          router.push({
                            pathname: '/devis/[id]/subscription',
                            query: { id: '1', step: 1 },
                          });
                        } else {
                          nextStep();
                          handleNextStepClick();
                        }
                      }}
                    >
                      Souscrire
                    </Button>
                  </div>
                </div>
              )}
            </>
          </StepperFooter>
        ) : (
          <StepperFooter>
            {showInfo && (
              <>
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant={'outline'}
                    onClick={() => {
                      nextStep();
                      handleNextStepClick();
                    }}
                  >
                    Valider
                  </Button>
                </div>
              </>
            )}
          </StepperFooter>
        )}
      </Stepper>
    </div>
  );
}
