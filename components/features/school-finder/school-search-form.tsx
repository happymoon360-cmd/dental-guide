'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useSchoolStore } from '@/lib/stores/school-store';
import { Search } from 'lucide-react';

export function SchoolSearchForm() {
  const {
    zip,
    state,
    onlyComplete,
    isLoading,
    setZip,
    setState,
    setOnlyComplete,
    searchSchools,
    getStates,
  } = useSchoolStore();

  const states = getStates();

  const handleSearch = () => {
    searchSchools();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchSchools();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="shadow-apple border-gray-200 rounded-3xl">
        <CardContent className="p-6 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* ZIP Code */}
            <div className="space-y-2">
              <Label htmlFor="zip" className="text-base font-medium">ZIP Code</Label>
              <Input
                id="zip"
                type="text"
                placeholder="e.g. 10001"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-12 rounded-2xl"
                aria-label="Enter ZIP code"
              />
            </div>

            {/* State */}
            <div className="space-y-2">
              <Label htmlFor="state" className="text-base font-medium">State</Label>
              <Select 
                value={state} 
                onValueChange={setState}
                aria-label="Select state filter"
              >
                <SelectTrigger id="state" className="h-12 rounded-2xl">
                  <SelectValue placeholder="All States" aria-placeholder="All States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All States</SelectItem>
                  {states.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

          {/* Only Complete Checkbox */}
          <div className="flex items-center space-x-3 py-2">
            <Checkbox
              id="onlyComplete"
              checked={onlyComplete}
              onCheckedChange={(checked) => setOnlyComplete(!!checked)}
              className="h-5 w-5"
              aria-label="Show only schools with complete information"
            />
            <Label htmlFor="onlyComplete" className="text-base cursor-pointer">
              Show only complete info
            </Label>
          </div>

            {/* State */}
            <div className="space-y-2">
              <Label htmlFor="state" className="text-base font-medium">State</Label>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger id="state" className="h-12 rounded-2xl">
                  <SelectValue placeholder="All States" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">All States</SelectItem>
                  {states.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Only Complete Checkbox */}
          <div className="flex items-center space-x-3 py-2">
            <Checkbox
              id="onlyComplete"
              checked={onlyComplete}
              onCheckedChange={(checked) => setOnlyComplete(!!checked)}
              className="h-5 w-5"
            />
            <Label htmlFor="onlyComplete" className="text-base cursor-pointer">
              Show only complete info
            </Label>
          </div>

          {/* Search Button */}
          <Button
            onClick={handleSearch}
            disabled={isLoading}
            className="w-full h-14 text-lg rounded-2xl bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            <Search className="mr-2 h-5 w-5" />
            {isLoading ? 'Searching...' : 'Find Schools'}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
