// pages/api/Absent.js

let data: any = []; //Variable data : Initialise une variable data comme un tableau vide.
//Cette variable est utilisée pour stocker les données récupérées de la base de données.

//utilisé dans les middlewares de Next.js pour manipuler et personnaliser les réponses HTTP
import pool from '../../utils/postgres';
// pool du module de connexion à PostgreSQL.

///Fonction fetchData
const fetchData = async () => {
  try {
    const client = await pool.connect(); // pour établir une connexion avec la base de données PostgreSQL.
    console.log('database connected DB');
    const result = await client.query('SELECT * FROM public."FACT"');
    //Exécute une requête pour sélectionner toutes les lignes de la table public.FACT

    const data = result.rows; //Les résultats de la requête sont stockés dans la variable data
    console.log('fetch data >>>>', data);
    return data;
    client.release();
    //Libère la connexion à la base de données avec client.release().
    //return NextResponse.json(result.rows[1].NOM_PRENOM);
  } catch (error) {
    console.error('error fetching ', error);
    throw error;
  }
};
///Exécution de fetchData
fetchData()
  .then((data) => {
    //fetchData affiche les données récupérées ou les erreurs dans la console.
    console.log('recevedata', data);
  })
  .catch((error) => {
    console.error('error fetching', error);
  });
//Une "fonction handler"est une fonction utilisée pour gérer un événement spécifique
//ou une demande dans un programme
export default function handler(req: any, res: any) {
  const { method, body } = req; //Extraction des paramètres la méthode HTTP et le corps de la requête .

  fetchData().then((data) => {
    console.log('handler data', data); //Appelle fetchData et attend les données.
    ///Gestion des méthodes HTTP :
    switch (method) {
      case 'GET': //GET : Renvoie toutes les données.
        res.status(200).json(data);
        break;
      case 'POST': //POST : Ajoute un nouvel élément aux données et renvoie l'élément ajouté.
        const newData = {
          id: data.length + 1,
          text: body.text,
          completed: false,
        };
        data.push(newData);
        res.status(201).json(newData);
        break;
      case 'PUT': //PUT : Met à jour un élément existant basé sur son ID et renvoie l'élément mis à jour.
        // Si l'élément n'existe pas, renvoie une erreur 404.
        const { id, text, completed } = body;
        const index = data.findIndex((myData: any) => myData.id === id);
        if (index !== -1) {
          data[index] = { id, text, completed };
          res.status(200).json(data[index]);
        } else {
          res.status(404).json({ message: 'myData not found' });
        }
        break;
      case 'DELETE': //DELETE : Supprime un élément basé sur son ID et renvoie un message de succès.
        data = data.filter((myData: any) => myData.id !== body.id);
        res.status(200).json({ message: 'myData deleted successfully' });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`); //Méthode non autorisée : Renvoie une erreur 405
      //si la méthode HTTP n'est pas prise en charge
    }
  });
}

////Résumé

//Connexion et requête à la base de données : fetchData se connecte à PostgreSQL et récupère des données.

//Gestion des requêtes HTTP : La fonction handler gère différentes méthodes HTTP
//pour lire, ajouter, mettre à jour et supprimer des données.

//Gestion des erreurs : Les erreurs de connexion et de requête sont correctement
//gérées et renvoyées au client.
