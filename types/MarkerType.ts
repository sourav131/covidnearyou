interface MarkerType {
  id: number;
  city: string;
  place_id: string;
  zip: string;
  contained_by: string;
  latitude: string;
  longitude: string;
  none: number;
  symptoms: number;
  flu: number;
  lepto: number;
  dengue: number;
  chick: number;
  icon: string;
}

export default MarkerType;
