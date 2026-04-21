// React Native
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Picker } from '@react-native-picker/picker';

// Formik
import { useFormik } from "formik";

// Yup
import * as yup from "yup";

// CSS Styles
import theme from "../../../theme";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.large,
    padding: theme.spacing.veryLarge,
  },
  header: {
    fontFamily: theme.fonts.main,
    fontWeight: "bold",
    fontSize: theme.fontSize.large,
    textAlign: "center",
  },
  inputField: {
    fontFamily: theme.fonts.main,
    borderWidth: 1,
    borderColor: theme.colors.input,
    borderRadius: theme.borderRadius.small,
    padding: theme.spacing.medium,
  },
  errorField: {
    fontFamily: theme.fonts.main,
    borderColor: theme.colors.error,
  },
});

// Component
export default function CreateReviewForm({ repositoriesList, onSubmit, error }) {
  // Yup validation Schema
  const validationSchema = yup.object().shape({
    ownerName: yup
      .string()
      .required("The repository owner is required"),
    repositoryName: yup
      .string()
      .required("The repository name is required"),
    rating: yup
      .number()
      .min(0)
      .max(100)
      .required("Rating must be a value between 0 and 100"),
    text: yup
      .string()
  });

  // Create an instance of Formik
  const formik = useFormik({
    initialValues: {
      ownerName: "",
      repositoryName: "",
      rating: "",
      text: "",
    },
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New review</Text>

      {/* Repository owner field */}
      <Picker
        selectedValue={formik.values.ownerName}
        onValueChange={(itemValue) =>
          formik.setFieldValue("ownerName", itemValue)
        }>
          <Picker.Item 
            label="Select repository owner"
            value=""
          />
          {repositoriesList.map((repository) => (
            <Picker.Item 
              key={repository.id} 
              label={repository.ownerName} 
              value={repository.ownerName} 
            />
          ))}
      </Picker>
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.ownerName}
        </Text>
      )}

      {/* Repository name field */}
      <Picker
        selectedValue={formik.values.repositoryName}
        onValueChange={(itemValue) =>
          formik.setFieldValue("repositoryName", itemValue)
        }>
          <Picker.Item 
            label="Select repository name"
            value=""
          />
          {repositoriesList.map((repository) => (
            <Picker.Item 
              key={repository.id} 
              label={repository.name} 
              value={repository.name} 
            />
          ))}
      </Picker>
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.repositoryName}
        </Text>
      )}

      {/* Rating value field */}
      <TextInput
        style={[
          styles.inputField,
          formik.touched.rating &&
            formik.errors.rating &&
            styles.errorField,
        ]}
        keyboardType="numeric"
        placeholder="0"
        value={formik.values.rating}
        onChangeText={formik.handleChange("rating")}
        onBlur={formik.handleBlur("rating")}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={{ color: theme.colors.error }}>
          {formik.errors.rating}
        </Text>
      )}

      {/* Review text field */}
      <TextInput
        style={styles.inputField}
        placeholder="Write your review..."
        value={formik.values.text}
        onChangeText={formik.handleChange("text")}
        onBlur={formik.handleBlur("text")}
        multiline
      />
      <Button title="Create a review" onPress={formik.handleSubmit} />
      {error && (
        <Text
          style={{
            color: theme.colors.error,
            fontWeight: theme.fontWeights.bold,
          }}
        >
          {error?.graphQLErrors[0]?.message}
        </Text>
      )}

    </View>
  );
}
