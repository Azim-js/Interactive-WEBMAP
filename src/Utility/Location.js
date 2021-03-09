export async function getAddressFromCoords(coords) {
  const response = await fetch(
    `http://nominatim.openstreetmap.org/reverse?format=json&lon=${coords.lang}&lat=${coords.lat}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch address. Please try again!');
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }
 
  const address = data.display_name;
  return address;
}
 
 
 
export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `http://nominatim.openstreetmap.org/search?format=json&q=${urlAddress}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch coordinates. Please try again!');
  }
  const data = await response.json();
  if (data.error_message) {
    throw new Error(data.error_message);
  }
 
  const coordinates = {
    lang: data[0].lon,
    lat: data[0].lat,
  };
 
  return coordinates;
}