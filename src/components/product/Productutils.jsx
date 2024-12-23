export const fetchAllImages = async (equipmentid) => {
    try {
        const response = await fetch(`http://localhost:8000/api/equipment/${equipmentid}/images`);
        const data = await response.json();

        if (data.success) {
            console.log("All images:", data.images);
            return data.images;
        } else {
            console.error(data.message);
        }
    } catch (error) {
        console.error("Error fetching images:", error);
    }
};

export const fetchPrimaryImage = async (equipmentid) => {
    try {
        const response = await fetch(`http://localhost:8000/api/equipment/${equipmentid}/images/primary`);
        const data = await response.json();

        if (data.success) {
            console.log("Primary image:", data.primaryImage);
            return data.primaryImage;
        } else {
            console.error(data.message);
        }
    } catch (error) {
        console.error("Error fetching primary image:", error);
    }
};
