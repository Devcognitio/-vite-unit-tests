export const getBalance = async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}


export const saveBalance = async (balance: number) => {
    const response = await fetch('https://api.example.com/data', { method: 'PUT', body: { balance: balance} as unknown as BodyInit });
    const data = await response.json();
    return data;
}

