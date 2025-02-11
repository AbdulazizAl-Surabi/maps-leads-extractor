"use client";
import { useEffect, useRef, useState } from "react";

type LatLngLiteral = google.maps.LatLngLiteral;
type PlaceResult = google.maps.places.PlaceResult;

export default function MapServiceComponent() {
  const [radius, setRadius] = useState(100);
  const [center, setCenter] = useState<LatLngLiteral>({
    lat: 49.2207,
    lng: 8.3648,
  });

  const [places, setPlaces] = useState<PlaceResult[]>([]);

  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<google.maps.Map | null>(null);
  const circleRef = useRef<google.maps.Circle | null>(null);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (window.google && window.google.maps) {
      setIsLoaded(true);
    } else {
      const script = document.createElement("script");
      script.src =
        "https://maps.gomaps.pro/maps/api/js?key=AlzaSyTQ_QoW-wpb_2ZFMTLnWKklnMJBi7UDpgs&libraries=places";
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && mapRef.current && !mapInstance.current) {
      mapInstance.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 12,
      });

      circleRef.current = new window.google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: mapInstance.current,
        center,
        radius,
      });

      mapInstance.current.addListener(
        "click",
        (e: google.maps.MapMouseEvent) => {
          if (e.latLng) {
            const newCenter = { lat: e.latLng.lat(), lng: e.latLng.lng() };
            setCenter(newCenter);
          }
        }
      );
    }
  }, [isLoaded]);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.setRadius(radius);
      circleRef.current.setCenter(center);
    }
    if (mapInstance.current) {
      mapInstance.current.setCenter(center);
    }
  }, [radius, center]);

  const handleFindCompanies = () => {
    if (!mapInstance.current) return;
    const service = new google.maps.places.PlacesService(mapInstance.current);

    const request: google.maps.places.PlaceSearchRequest = {
      location: center,
      radius,
      type: "establishment",
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        setPlaces(results);
      } else {
        setPlaces([]);
      }
    });
  };

  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(Number(e.target.value));
  };

  return (
    <main className="p-6">
      {/* Map-Container */}
      <div
        ref={mapRef}
        style={{ width: "700px", height: "500px" }}
        className="mb-4"
      />

      {/* Slider */}
      <div className="mb-4">
        <label htmlFor="radiusSlider" className="block mb-2">
          Radius: {radius} Meter
        </label>
        <input
          id="radiusSlider"
          type="range"
          min="50"
          max="2000"
          value={radius}
          onChange={handleRadiusChange}
          style={{ width: "100%" }}
        />
      </div>

      {/* Centered, thicker Button */}
      <div className="flex justify-center my-4">
        <button
          onClick={handleFindCompanies}
          className="px-6 py-4 bg-blue-600 text-white rounded hover:bg-blue-700 font-bold text-lg"
        >
          Unternehmen in dieser Gegend suchen
        </button>
      </div>

      {/* Ergebnisliste */}
    </main>
  );
}
