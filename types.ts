// Represents a single city in the response
export interface CityData {
    name: string;
    date: string;
    fips: number;
    lat: string;
    long: string;
    confirmed: number;
    deaths: number;
    confirmed_diff: number;
    deaths_diff: number;
    last_update: string;
}

// Represents the region/province/state information

export interface Region {
    iso: string;
    name: string;
    province: string;
    lat: string;
    long: string;
    cities: CityData[];
}

// Represents a single report entry (state-level data)
export interface ReportData {
    date: string;
    confirmed: number;
    deaths: number;
    recovered: number;
    confirmed_diff: number;
    deaths_diff: number;
    recovered_diff: number;
    last_update: string;
    active: number;
    active_diff: number;
    fatality_rate: number;
    region: Region;
}

// The full API response type
export interface ApiResponse {
    data: ReportData[];
}

export interface TotalCovidData {
    data: {
      date: string;
      last_update: string;
      confirmed: number;
      confirmed_diff: number;
      deaths: number;
      deaths_diff: number;
      recovered: number;
      recovered_diff: number;
      active: number;
      active_diff: number;
      fatality_rate: number;
    };
  }

// Represents a single dataset for the chart (e.g., confirmed cases for a state)
export interface ChartDataset {
    label: string; // Name of the state or data category
    data: number[]; // Array of confirmed cases or deaths over time
    borderColor: string;
    backgroundColor: string | string[];
    fill: boolean;
}

// Represents the data structure passed to the LineChart component
export interface ChartData {
    labels: string[]; // Dates
    datasets: ChartDataset[];
}
