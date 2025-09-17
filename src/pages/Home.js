import { Box, Stack, Text } from "@chakra-ui/react";
import Card from "../components/Card";
import axios from "axios";
import { paymentURL } from "../static_data/urls";
import optionsConfig from "../static_data/options";

function Home() {
  const checkoutHandler = async ({ amount, itemName }) => {
    try {
      //take razorpay_secret_key first
      //   const {
      //     data: { key },
      //   } = await axios.get(`${keyURL}`);
      const {
        data: { order, key },
      } = await axios.post(`${paymentURL}/checkout`, { amount });

      const options = optionsConfig({ key, order, itemName });

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="page home">
      <Text p={1}>Home</Text>
      <Box>
        <Stack
          direction={["column", "row"]}
          h={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card
            imgSrc="https://pim-resources.coleparmer.com/product/l/national-optical-national-optical-167-series-led-compound-microscopes-86610.jpg"
            amount={5000}
            itemName={"Compound Microscope"}
            checkoutHandler={checkoutHandler}
          />
          <Card
            imgSrc="https://spacearcade.in/wp-content/uploads/2024/05/030A9952-copy-scaled.jpg"
            amount={3000}
            itemName={"Telescope"}
            checkoutHandler={checkoutHandler}
          />
        </Stack>
      </Box>
    </section>
  );
}

export default Home;
