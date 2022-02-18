import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { defaultCenter } from "../../../service/ServiceMaps";
export const MapsPackage = () => {
  return (
    <div className="container mx-auto mb-6">
      <div className="grid grid-cols-1 px-4 h-[600px]">
        <div className=" w-full rounded-xl shadow-lg">
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
    </div>
  );
};
