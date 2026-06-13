import type { Country } from '../../types';
import { CountryCard } from '../country-card/country-card';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';
import { useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';


type CountryListProps = {
  countries: Country[];
  searchQuery: string;
  selectedColumns: string[];
  selectedRegion: string;
  selectedYear: number;
  sortField: 'name' | 'population';
  sortOrder: 'asc' | 'desc';
  onYearChange: (year: number) => void;
};

export const CountryList = ({
  countries,
  searchQuery,
  selectedColumns,
  selectedRegion,
  selectedYear,
  sortField,
  sortOrder,
}: CountryListProps) => {
  const filteredCountries = useMemo(() => {
    return countries
      .filter((c) => {
        const matchesSearch = c.id.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRegion = !selectedRegion || c.data.some((d) => d.region === selectedRegion);

        return matchesSearch && matchesRegion;
      })
      .sort((a, b) => {
        if (sortField === 'name') {
          return sortOrder === 'asc'
            ? a.id.localeCompare(b.id)
            : b.id.localeCompare(a.id);
        }

        const popA =
          getPopulationForYear(createYearDataMap(a.data), selectedYear) || 0;

        const popB =
          getPopulationForYear(createYearDataMap(b.data), selectedYear) || 0;

        return sortOrder === 'asc'
          ? popA - popB
          : popB - popA;
      });
  }, [
  countries,
  searchQuery,
  selectedRegion,
  selectedYear,
  sortField,
  sortOrder,
]);

  return (
    <Virtuoso
      style={{ height: 1000 }}
      totalCount={filteredCountries.length}
      overscan={300}
      itemContent={(index) => {
        const country = filteredCountries[index];

        return (
          <div style={{ padding: '10px' }}>
            <CountryCard
              country={country}
              selectedYear={selectedYear}
              selectedColumns={selectedColumns}
            />
          </div>
        );
      }}
    />
  );
};
