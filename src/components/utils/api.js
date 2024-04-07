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

export const fetchSimulation = async (vehiclePrice, entryPercentage, numberOfInstallments) => {
  console.log(vehiclePrice)
  const bodyData = {
    vehiclePrice: vehiclePrice,
    downPayment: entryPercentage,
    installments: numberOfInstallments,
};
  try {
    const response = await fetch(`${BASE_URL}/simulate-financing`,  {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyData), 
  });
    if (!response.ok) {
      throw new Error("Erro ao buscar simulação");
    }
    const data = await response.json();
    return data.installmentValue;
  } catch (error) {
    console.error("fetchSimulation error:", error);
    throw error;
  }
};
