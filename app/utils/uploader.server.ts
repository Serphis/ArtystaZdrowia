// import { v2 as cloudinary } from 'cloudinary';
// import fs from "fs";
// import path from "path";

// // Konfiguracja Cloudinary
// cloudinary.config({ 
//     cloud_name: 'djio9fbja', 
//     api_key: '829449787986143', 
//     api_secret: '3IPKXL_ifr4zGGypOPlshLtJxKA' // Wstaw swój sekret API
// });

// async function getCloudinaryImages() {
//     try {
//       // Pobierz zasoby z Cloudinary
//       const result = await cloudinary.api.resources({
//         type: 'upload', // Typ zasobów
//         prefix: 'public/', // Opcjonalnie: folder w Cloudinary
//         max_results: 50, // Maksymalna liczba wyników
//       });
  
//       // Zaloguj linki do zdjęć
//       const imageUrls = result.resources.map((resource) => resource.secure_url);
  
//       console.log('Linki do zdjęć:', imageUrls);
//       return imageUrls;
//     } catch (error) {
//       console.error('Błąd podczas pobierania zdjęć:', error);
//     }
//   }
  
//   // Wywołaj funkcję, aby pobrać zdjęcia
//   getCloudinaryImages();