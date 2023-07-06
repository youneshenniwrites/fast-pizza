type getAddressProps = {
  latitude: number;
  longitude: number;
};

export async function getAddress({ latitude, longitude }: getAddressProps) {
  const res = await fetch(
    `${
      import.meta.env.VITE_BASE_URL
    }?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
