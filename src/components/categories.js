

import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text,ScrollView } from 'react-native';
import { categoryData } from '../constants';
import Animated,{FadeInDown} from 'react-native-reanimated'

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View>
      <View style={{ flexDirection: 'row', paddingHorizontal: 15, marginTop: 20 }}>
        {categoryData.map((cat, index) => {
          const isActive = cat.name === activeCategory;
          const activeButtonClass = isActive ? 'bg-amber-400' : 'bg-black/10';

          return (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveCategory(cat.name)}
              style={{ marginRight: 10 }}>
              <View style={{ borderRadius: 50, padding: 6, backgroundColor: activeButtonClass }}>
                <Image
                  source={{ uri: cat.image }}
                  style={{ width: 60, height: 60, borderRadius: 30 }}
                />
              </View>
              <Text style={{ textAlign: 'center', marginTop: 6, fontSize: 16, color: isActive ? 'blue' : '#6B7280' }}>
                {cat.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
