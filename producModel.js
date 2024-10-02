const products = {
    1: {
        name: "Gadames city",
        price: "$120.00",
        image: ["assets/images/gadm.jpg", "assets/images/Gad.jpg"],
        description: "After Naloot, we will continue driving south, passing by the desert and Sinawen to explore how people in that era figured out the natural AC system, also seeing the location of the American movie legend, 'The Lost'."
    },
   
    2: {
        name: "Lepdus Magna",
        price: "$60.00",
        image: ["assets/images/lipd.jpeg", "assets/images/lipTheatre.jpeg","assets/images/lleptis-magna.jpeg"],
        description: " exploring Lepdus Magna in early morning or in golden hour eveing is the best you will sense the roman beauty building ."
    },




    3:{
      
        image:["assets/images/cyre.jpeg","assets/images/cyre313.jpeg","assets/images/cyrene.jpeg"],
        name:"Cyren - Shahat",
        price: "$85.00",
        description: "you gonna explore cyren temple and statues with the theatre plus enjoying the natural around its totally amazing during winter"
         
    },
        
        
       4: {
        
        image:['assets/images/tobruk-cemetery.jpeg','assets/images/wor.jpeg','assets/images/Tubrak.jpg'],
        name: "World War Two Cemetery",
        price: "$100.00",
        description: 'Tobruk War Cemetery incorporates the burial ground used during the siege and the memorial erected there at the time by the Australians has been replaced by a permanent memorial of similar design. Many battlefield graves in the desert have been brought into the cemetery',
         
    },
        
        
      5:  {
         
        image:['assets/images/qaser alhaj.jpeg','assets/images/qaser alha.jpeg'],
        name:'Qaser Alhaj ',
        price: "$50.00",
        description: 'driving all way up to the western mountains and see how Libyan back in the days used to store their food in cool way before fridge invented ',
        
    },
        
        
       6: {
        
        image:['assets/images/blue.jpeg','assets/images/bluEye.jpeg'],
        name:'Blue Eye',
        price: "$55.00",
        description: 'hiking all down 1.5k to bottom to explore the lakes and falls between the rocks ',
        
    },
        
        
       7:  {
            
           image:['assets/images/kabaw.png','assets/images/dinosaur.jpeg','assets/images/dinasourrr.jpeg'],
           name:'Kabaw old town and Dinasour Museum ',
           price: "$100.00",
           description: 'from the blue eye will continue 100km up to the mountains to sea how libyan villages look like and naloot storge castle blus dinosur museum ',
           
        },
        
        
          
        
        
              
        8: {
                    
              image:['assets/images/merd.jpg','assets/images/rock.jpeg','assets/images/gaber.jpeg'],
                  
              name:'oasis & akakus painting ',
                  
              price:"$1000.0",
                  
              description: 'we will fly to ubari to enjoy desert and lakes plus mountin painting including life style of Tawergh and nearby villages ',
                    
                
            },
        
        
                   9: {
                       
                       image:['assets/images/redCastle.jpeg','assets/images/TripoliMuseum.jpeg','assets/images/Marcus.jpeg'],
                       name:'Tripoli Area',
                       price: "$25.00",
                       description: 'walking in Tripoli streets and exploring red castle and old town plus historical Marcus arch with libyan traditional food ',
                        
                    },
        
        
                       10: {
                            
                           image:['assets/images/beng.jpeg'],
                           name:'Benghazi city',
                           price: "$20.00",
                           description: 'Benghazi one of the biggest city in libya and has huge impact in many political situation during the history ',
                            
                        },
        
        
                            11:{
                               
                               image:['assets/images/food.jpeg'],
                               name:'taste & make the best Libyan dishes ',
                               price: "$30.00",
                               description: 'you chose three Libyan dishes and you will learn how to cook them , We have many unique and delicious dishes and I promise you addict it ',
                                
                            },
        
        
                              12:  {
                                   
                                   image:['assets/images/dive.avif'],
                                   name:'3 days lessons diving under water ',
                                   price: "$250.00",
                                   description: 'you will be taken for adventure under the water and exploring the underwater life style ',
                                   
                                },
        
        
                                   13: {
                                        
                                       image:['assets/images/arabic.jpg'],
                                       name:'Learn Libyan dailect ',
                                       price: "$1000.00",
                                       description: 'this course for people who interested to learn Libyan dailect and culture from one of the teachers in Tripoli or any other village',
                                        
                                    },
                                   
                                    14: {
                                        
                                        image:['assets/images/derna.jpg'],
                                        name:'Ras elhelal ',
                                        price: "$40.00",
                                        description: ' one of the best northern coast cities has varties of natural beauties including mountains, sea and trees',
                                         
                                     },

                                     15:{
                                        
                                        image:['assets/images/Sab.jpg','assets/images/memoSab.jpeg','assets/images/sabrathat.jpeg'],
                                        name: 'Sabratha ',
                                        price:"$30.00",
                                        description:'exploring Mosaics and gorgeous theathre plus ocean view in the front one of the best experience ever ',
                                    
                                     },
    // Add more products here...
};

function openModal(id) {
    const product = products[id];
    if (product) {
        document.getElementById('product-name').innerText = product.name;
        document.getElementById('product-price').innerText = `Price: ${product.price}`;
        document.getElementById('product-description').innerText = product.description;

        // Set main product image
        document.getElementById('product-image').src = product.image[0];

        // Populate the image gallery
        const gallery = document.getElementById('product-image-gallery');
        gallery.innerHTML = ''; // Clear existing images
        product.image.forEach((imgSrc) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.style.width = '100px'; // Thumbnail size
            img.style.cursor = 'pointer';
            img.onclick = () => {
                document.getElementById('product-image').src = imgSrc; // Change main image on click
            };
            gallery.appendChild(img);
        });

        document.getElementById('productModal').style.display = "block"; // Show the modal
    }
}

function closeModal() {
    document.getElementById('productModal').style.display = "none"; // Hide the modal
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
