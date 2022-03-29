import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { defaultCenter } from "../../../service/ServiceMaps";
export const MapsPackage = () => {
  return (
    <div className="grid grid-cols-1 px-4 mt-6 h-[390px]">
      <div className=" w-full rounded-md shadow-lg">
        <LoadScript googleMapsApiKey="AIzaSyCN5RsuQUGXEAd3TqNpEkHygtmhFxNiDZk">
          <GoogleMap
            mapContainerClassName="w-full h-full rounded-xl"
            zoom={13}
            center={defaultCenter}
          >
            <Marker key="location" position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};
