class Card {
    constructor(
        id,
        title,
        promotion,
        logo,
        backgroundImageFront,
        backgroundImageBack,
        backgroundFront,
        backgroundBack,
    ){
        this.id=id;
        this.title=title;
        this.promotion=promotion;
        this.logo=logo;
        this.backgroundImageFront=backgroundImageFront;
        this.backgroundImageBack=backgroundImageBack;
        this.backgroundFront=backgroundFront;
        this.backgroundBlack=backgroundBack;
    }
}

export default Card;