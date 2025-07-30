export type Launch = {
  flight_number: number;
  launch_date_unix: number;
  mission_name: string;
  rocket?: {
    rocket_name: string;
  };
  links?: {
    mission_patch: string | null;
    mission_patch_small: string | null;
  };
  details?: string | null;
  isOpen: boolean;
};
