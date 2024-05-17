class Player {
    constructor(canvas) {
        this.velocity = {
            x: 0,
            y: 0
        };
        this.rotation = 0;
        const image = new Image();
        image.src = './assets/spaceship.png';
        image.onload = () => {
            const scale = .15
            this.image = image
            this.widht = image.width * scale;
            this.height = image.height * scale;
            this.position = {
                x: canvas.width / 2 - this.widht / 2,
                y: canvas.height - this.height - 20,
            };
        }
    };
    draw(ctx) {
        ctx.save();
        ctx.translate(this.position.x + this.widht / 2, this.position.y + this.height / 2);
        ctx.rotate(this.rotation);
        ctx.translate(-this.position.x - this.widht / 2, -this.position.y - this.height / 2);
        ctx.drawImage(this.image, this.position.x, this.position.y, this.widht, this.height);
        ctx.restore();
    };
    update(ctx) {
        if (this.image) {
            this.draw(ctx)
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        }
    }
}
export default Player;