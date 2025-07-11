import serviceModel from "../models/serviceModel.js";

const changeAvailablity = async (req, res) => {
  try {
    const { serviceId } = req.body;

    if (!serviceId) {
      return res.json({ success: false, message: "Service ID is required" });
    }

    const serviceData = await serviceModel.findById(serviceId);
    if (!serviceData) {
      return res.json({ success: false, message: "Service not found" });
    }

    await serviceModel.findOneAndUpdate(
      { _id: serviceId }, // ✅ Corrected query
      { available: !serviceData.available }
    );

    res.json({ success: true, message: "Availability Changed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const serviceList = async (req,res) =>{
  try {
    const services = await serviceModel.find({})
    res.json({success:true,services})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

export { changeAvailablity,serviceList };
