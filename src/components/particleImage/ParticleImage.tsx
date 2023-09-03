import ParticleImage, {
    ParticleOptions,
    Vector,
    forces,
    ParticleForce
} from "react-particle-image";

const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
        // Get pixel
        const pixel = image.get(x, y);
        // Make a particle for this pixel if blue > 50 (range 0-255)
        return pixel.b > 50;
    },
    color: ({ x, y, image }) => "#ff5050",
    radius: () => Math.random() * 1 + 0.5,
    mass: () => 40,
    friction: () => 0.5,
    initialPosition: ({ canvasDimensions }) => {
        return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
    }
};

const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 5);
};

export default function ParticleImg({ height, width, scale, maxParticles, mass, friction }: { height: number, width: number, scale: number, maxParticles: number, mass: number, friction: number }) {
    return (
        <ParticleImage
            style={{ marginTop: "1rem" }}
            width={width}
            height={height}
            src={"https://i.ibb.co/0jkkVBF/Profile-photo.png"}
            scale={scale}
            entropy={20}
            maxParticles={maxParticles}
            particleOptions={{ ...particleOptions, mass: () => mass, friction: () => friction }}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
            backgroundColor="transparent"
        />
    );
}