const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchVehicles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/vehicles`);
    if (!response.ok) {
      throw new Error("Erro ao buscar carros");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("fetchVehicles error:", error);
    throw error;
  }
};
