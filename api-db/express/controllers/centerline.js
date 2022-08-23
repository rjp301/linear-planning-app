import { models } from "../../sequelize/index.js";

export async function getAll(req, res) {
  const centerlines = await models.centerline.findAll();
  res.status(200).json(centerlines);
}

export async function getById(req, res) {
  const centerline = await models.centerline.findByPk(req.params.id);
  res.status(200).json(centerline);
}

export async function create(req, res) {
  const newCenterline = await models.centerline.create(req.body);
  res.status(201).json(newCenterline);
}

// export const getCenterline = async (req, res) => {
//   try {
//     const CL = await Centerline.findById(req.params.id);
//     res.status(200).json(CL);
//   } catch (err) {
//     next(err);
//   }
// };

// export const addCenterline = async (req, res, next) => {
//   try {
//     const newCL = new Centerline(req.body);
//     await Project.updateOne(
//       { _id: newCL.projectId },
//       { $push: { centerlines: { id: newCL._id, name: newCL.name } } }
//     );
//     await newCL.save();
//     res.status(200).json(newCL);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// };

// export const deleteCenterline = async (req, res, next) => {
//   try {
//     await Centerline.findByIdAndDelete(req.params.id);
//     res.status(200).json("Centerline has been deleted");
//   } catch (err) {
//     next(err);
//   }
// };

// export const updateCenterline = async (req, res, next) => {
//   try {
//     const updatedCL = await Centerline.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );
//     res.status(200).json(updatedCL);
//   } catch (err) {
//     next(err);
//   }
// };
