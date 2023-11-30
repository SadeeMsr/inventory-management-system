import prisma from "../DB/db.config.js";



export const createProduct = async (req, res) => {
  try {
    const newUser = await prisma.products.create({
      data: req.body,
    });

    return res.status(200).json({
      data: newUser,
      msg: `Product is created successfully on uuid#${newUser.id}`,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Data not added. Something is wrong!", error });
  } finally {
    await prisma.$disconnect();
  }
};




export const fetchProducts = async (req, res) => {
  const { id } = req.params;

  try {
      let allUsers;
      if (id) {
          allUsers = await prisma.products.findUnique({
              where: {
                  id:Number(id),
                },
            });
        } else allUsers = await prisma.products.findMany();
        

    if (allUsers.length === 0) {
      return res.status(200).json({ data: [], msg: "No data available!" });
    } else {
      return res
        .status(200)
        .json({ data: allUsers, msg: "Successfully fetched data" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Data not added. Something is wrong!", error });
  } finally {
    await prisma.$disconnect();
  }
};



export const updateProduct = async (req, res) => {
  
    const { id } = req.params;
    try {
      const newUser = prisma.products.update({
        where: {
          id: Number(id)
        },
        data: req.body
      })

      console.log(newUser,id,"hii")
  
      return res.status(200).json({
        data: newUser,
        msg: `Product is updated successfully on uuid#${newUser.id}`,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: "Data not added. Something is wrong!", error });
    } finally {
      await prisma.$disconnect();
    }
  };


  export const deleteProduct = async (req, res) => {
    const userId = req.params.id;
    await prisma.products.delete({
      where: {
        id: Number(userId),
      },
    });
  
    return res.json({ status: 200, msg: "User deleted successfully" });
  };
  
  