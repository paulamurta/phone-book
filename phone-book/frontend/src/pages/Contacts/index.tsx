import { Container } from "./styles";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 1 }}
    >
      <Container>Contacts</Container>;
    </motion.div>
  );
};

export default Contacts;
