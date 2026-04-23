// React Native
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Searchbar } from "react-native-paper";

// Display both the search bar and the repositories filter option
export default function RepositoryListHeader({
  value,
  setValue,
  searchKeyword,
  setSearchKeyword,
}) {
  return (
    <View>
      {/* Search bar to filter repositories by name */}
      <Searchbar
        placeholder="Search repositories..."
        onChangeText={setSearchKeyword}
        value={searchKeyword}
      />

      {/* Choose the ordering method */}
      <Picker selectedValue={value} onValueChange={setValue}>
        <Picker.Item label="Latest repositories" value={"Latest"} />
        <Picker.Item label="Highest rated repositories" value={"Highest"} />
        <Picker.Item label="Lowest rated repositories" value={"Lowest"} />
      </Picker>
    </View>
  );
}
