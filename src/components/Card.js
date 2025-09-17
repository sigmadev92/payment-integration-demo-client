import { VStack, Image, Text, Button } from "@chakra-ui/react";

function Card({ amount, imgSrc, checkoutHandler, itemName }) {
  return (
    <VStack>
      <Image src={imgSrc} boxSize={"64"} objectFit={"cover"} />
      <Text>{itemName}</Text>
      <Text> ₹ {amount}</Text>
      <Button onClick={() => checkoutHandler({ amount, itemName })}>
        Buy Now
      </Button>
    </VStack>
  );
}

export default Card;
