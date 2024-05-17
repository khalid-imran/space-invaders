import Player from "./player.js";
import Projectile from "./projectile.js";
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = innerWidth - 10;
canvas.height = innerHeight - 10;

/*player*/
const player = new Player(canvas);
const projectiles = [];
const keys = {
    ArrowUp: {
        pressed: false,
    },
    ArrowDown: {
        pressed: false,
    },
    ArrowRight: {
        pressed: false,
    },
    ArrowLeft: {
        pressed: false,
    },
}
const speed  = 7;
function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.update(ctx);
    projectiles.forEach((projectile, index) => {
        if (projectile.position.y + projectile.radius <= 0) {
            setTimeout(() => {
                projectiles.splice(index, 1);
            }, 0)
        } else {
            projectile.update(ctx)
        }

    })
    if (keys.ArrowUp.pressed && player.position.y >= 0) {
        player.velocity.y = -speed;
    } else if (keys.ArrowDown.pressed && player.position.y + player.height <= canvas.height) {
        player.velocity.y = speed;
    } else {
        player.velocity.y = 0;
    }
    if (keys.ArrowLeft.pressed && player.position.x >= 0) {
        player.velocity.x = -speed;
        player.rotation = -.15;
    } else if (keys.ArrowRight.pressed && player.position.x + player.widht <= canvas.width) {
        player.velocity.x = speed;
        player.rotation = .15;
    } else {
        player.velocity.x = 0;
        player.rotation = 0;
    }
}
animate()

//control player
addEventListener('keydown', ({key}) => {
    switch (key) {
        case 'ArrowUp':
            keys.ArrowUp.pressed = true;
            break;
        case 'ArrowDown':
            keys.ArrowDown.pressed = true;
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = true;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true;
            break;
        case ' ':
            projectiles.push(
                new Projectile(
                    {
                        position: {
                            x: player.position.x + player.widht / 2,
                            y: player.position.y,
                        },
                        velocity: {
                            x: 0,
                            y: -10
                        },
                        radius: 3,
                    }
                )
            )
            console.log(projectiles)
            break;
        default:
    }
})
addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'ArrowUp':
            keys.ArrowUp.pressed = false;
            break;
        case 'ArrowDown':
            keys.ArrowDown.pressed = false;
            break;
        case 'ArrowRight':
            keys.ArrowRight.pressed = false;
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false;
            break;
        default:
    }
})