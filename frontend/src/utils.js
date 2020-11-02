const imageUrls = {
  bartender: [
    "https://cdn.theforkmanager.com/static/styles/blog_article_header_image/public/wp-blog/3-el-tenedor-atraer-clientes-bartender-restaurante.jpg?itok=RVUU9aiQ",
    "https://i.insider.com/5ddc106dfd9db21bcd29c13c?width=1136&format=jpeg",
    "https://enrichjobs.com/wp-content/uploads/2019/12/Bartender-making-a-drink.jpg",
  ],
  driver: [
    "https://img.freepik.com/free-photo/smiling-van-driver-portrait_53419-6444.jpg?size=626&ext=jpg&ga=GA1.2.109734625.1598054400",
    "https://assets.grab.com/wp-content/uploads/2020/06/image-dax-service-privatehire.jpg",
    "https://cdn.vox-cdn.com/thumbor/yIlho6ha-rDjt1pjrbgjT-qeRi0=/0x0:2560x1440/1200x800/filters:focal(1x0:409x408)/cdn.vox-cdn.com/uploads/chorus_image/image/59336187/Dara_Drives__1_.0.png",
  ],
  deejay: [
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iLhhwTmf4zOw/v0/-1x-1.jpg",
    "https://pbs.twimg.com/media/DjLxlbSX0AALgNP.jpg",
    "https://i1.sndcdn.com/avatars-000671609960-6ngzg3-t500x500.jpg",
  ],
  chef: [
    "https://artzycafe.com/wp-content/uploads/2020/05/Vocations-in-Cooking.jpg",
    "https://www.escoffier.edu/wp-content/uploads/2015/12/ThinkstockPhotos-175004788.jpg",
    "https://assets3.thrillist.com/v1/image/1718972/414x310/crop;jpeg_quality=65.jpg",
  ],
  waiter: [
    "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/08/waiter-taking-card-to-pay-the-bill.jpg?fit=1200%2C879&ssl=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNB_fcdABmyQKzFVZSWhW1u4d6AixGr0lB_A&usqp=CAU",
    "https://www.tasteofhome.com/wp-content/uploads/2019/12/happy-waiters-bringing-food-table-serving-shutterstock_1384574870.jpg",
  ],
};

const getJobImage = (category) => {
  try {
    let jobImages = imageUrls[category.toLowerCase()];
    let index = Math.floor(Math.random() * jobImages.length);
    return jobImages[index];
  } catch (err) {
    return null;
  }
};

const getJobImages = (category) => {
  try {
    return imageUrls[category.toLowerCase()];
  } catch (err) {
    return null;
  }
};

export default {
  getJobImage,
  getJobImages,
};
