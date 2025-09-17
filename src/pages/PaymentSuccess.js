import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import { useParams, useSearchParams } from "react-router-dom";
function PaymentSuccess() {
  const { result } = useParams();
  const [query] = useSearchParams();
  const referenceNumber = query.get("reference");
  return (
    <Box>
      <VStack h={"90vh"} justifyContent={"center"}>
        {result === "success" ? (
          <>
            <Heading>Order Successful </Heading>
            <Text>Reference Number : {referenceNumber}</Text>
          </>
        ) : (
          <Heading>Order Failed</Heading>
        )}
      </VStack>
    </Box>
  );
}

export default PaymentSuccess;
