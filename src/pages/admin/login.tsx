import { Button, Input, Label } from '@/components/ui';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

export default function Login() {
  const router = useRouter();

  const ValidationSchema = z.object({
    email: z
      .string({ required_error: 'formValidationErrors.required' })
      .min(3, 'formValidationErrors.minLength')
      .max(20, 'formValidationErrors.maxLength'),
    password: z
      .string({ required_error: 'formValidationErrors.required' })
      .min(8, 'formValidationErrors.minLength'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: true,
    },
    validationSchema: toFormikValidationSchema(ValidationSchema),
    validateOnMount: true,
    onSubmit(values, _formikHelpers) {},
  });

  return (
    <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 w-[50%] sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-cyan-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <Label className="text-2xl font-semibold">lactogest</Label>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={formik.handleSubmit}
              >
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      required
                      id="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    />
                    <Label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Adresse e-mail
                    </Label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      required
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    />
                    <Label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Mot de passe
                    </Label>
                  </div>
                  <div className="relative">
                    <Button
                      className="text-white rounded-md px-2 py-1"
                      variant={'secondary'}
                      type="submit"
                      // onClick={() => router.push('/admin')}
                    >
                      se connecter
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
