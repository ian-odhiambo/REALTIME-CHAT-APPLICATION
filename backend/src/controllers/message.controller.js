export const sendMessage = async (req, res) => {
  console.log("message sent", req.params.id);
  res.status(200).json({ message: "Message sent successfully" });
};
