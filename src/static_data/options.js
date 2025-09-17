export default function optionsConfig({ key, order, itemName }) {
  return {
    key, // Enter the Key ID generated from the Dashboard
    amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: itemName,
    description: "Test Transaction",
    image: "https://avatars.githubusercontent.com/u/151429360?v=4",
    order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "http://localhost:4000/api/payment/verification",
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9000090000",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };
}
