import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine } from 'tsparticles-engine';

interface ParticlesBackgroundProps {
    theme?: 'light' | 'dark';
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({ theme = 'light' }) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        // Optional: Add logic when particles are loaded
    }, []);

    // Configuration based on theme
    const isDark = theme === 'dark';

    // Colors: Slate-900 for dark bg, White for light bg.
    // Particles: Slate-400 (dark mode) vs Slate-600 (light mode)
    const backgroundColor = isDark ? '#0f172a' : '#ffffff';
    const particleColor = isDark ? '#94a3b8' : '#475569';
    const linkColor = isDark ? '#94a3b8' : '#475569';

    const options = useMemo(() => {
        return {
            background: {
                color: {
                    value: backgroundColor,
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 0.5,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: particleColor,
                },
                links: {
                    color: linkColor,
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: "none" as const,
                    enable: true,
                    outModes: {
                        default: "bounce" as const,
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 50,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        };
    }, [backgroundColor, particleColor, linkColor]);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
            className="absolute inset-0 -z-10"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none' // Allows clicking elements underneath if interactivity isn't strictly required
            }}
        />
    );
};

export default ParticlesBackground;