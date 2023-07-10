import { getAddress as getAddressProps } from "../types";

export async function getAddress({ latitude, longitude }: getAddressProps) {
  const res = await fetch(
    `${
      import.meta.env.VITE_BASE_LOCATION_URL
    }?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}

export function getPosition(): Promise<GeolocationPosition> {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
