//client side
import axios from "axios";

const getAllImages = async() => {
    const res = await axios.get(`/api/images`);
    return res.data || [];
}

const deleteImage = async(id) => {
    const res = await axios.delete(`/api/images/${id}`);
    return res.data || [];
}
export { getAllImages, deleteImage };