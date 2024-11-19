import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type AnimatedBodyProps = {
    text: string;
    className: string;
    wordSpace: string;
    charSpace: string;
}

export default function AnimatedBody({ text, className, wordSpace, charSpace }: AnimatedBodyProps) {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        } else {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    const wordAnimation = {
        hidden: {},
        visible: {},
    };

    const bodyAnimataion = {
        hidden: {
            opacity: 0,
            y: `1em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                delay: 0.1,
                duration: 0.1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    }

    return (
        <motion.p
            aria-label={text}
            aria-hidden="true"
            ref={ref}
            role="heading"
            className={className}
            animate={ctrls}
            variants={bodyAnimataion}
            initial="hidden"
            
        >
            {text}
        </motion.p>
    )
}