import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Layout from "./Layout/Layout";

const page = ({ element, props }: { element: React.ReactNode; props: any }) => {
  const duration = 0.15;
  // you can add custom transitions by conditionally checking the props.path value

  return (
    <Layout {...props}>
      <AnimatePresence>
        <motion.div
          key={props.path}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: duration,
              duration: duration,
              when: "beforeChildren",
            },
          }}
          exit={{ opacity: 0, transition: { duration: duration } }}
          transition={{ duration: 1 }}
        >
          {element}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default page;
