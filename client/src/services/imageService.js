//client side
import axios from "axios";

const getAllImages = async() => {
    const res = await axios.get(`/api/images`);

    return res.data || [];
}

export { getAllImages };