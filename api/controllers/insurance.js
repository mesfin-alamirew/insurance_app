import Insurance from '../models/Insurance.js';

export const createInsurance = async (req, res, next) => {
  const newInsurance = new Insurance(req.body);
  try {
    const savedInsurance = await newInsurance.save();
    res.status(200).json(savedInsurance);
  } catch (error) {
    next(error);
  }
};
export const updateInsurance = async (req, res, next) => {
  try {
    const updatedInsurance = await Insurance.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedInsurance);
  } catch (error) {
    next(error);
  }
};
export const deleteInsurance = async (req, res, next) => {
  try {
    await Insuarnce.findByIdAndDelete(req.params.id);
    res.status(200).json('Insurance has been deleted!');
  } catch (error) {
    next(error);
  }
};

export const getInsurance = async (req, res, next) => {
  try {
    const insurance = await Insurance.findById(req.params.id);
    res.status(200).json(insurance);
  } catch (error) {
    next(error);
  }
};

export const getInsurances = async (req, res, next) => {
  try {
    const insurances = await Insurance.find();

    res.status(200).json(insurances);
  } catch (error) {
    next(error);
  }
};
