class Projectile{
    constructor({position, velocity, radius}) {
        this.position = position;
        this.velocity = velocity;
        this.radius = radius
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }
    update(ctx) {
        this.draw(ctx)
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}
export default Projectile;