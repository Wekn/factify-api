import getcategory from "./category.service.js";

const getCategories = (req, res) => {
    getcategory((err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        return res.json({
          status: true,
          message: "All Categotys",
          data: result
        });
      }
    });
  

};
export default getCategories;
