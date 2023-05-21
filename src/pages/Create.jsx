import { Box, FormLabel, FormControl, Input, FormHelperText, Textarea, Checkbox, Button } from "@chakra-ui/react"
import { Form, redirect } from "react-router-dom"
export default function Create() {
  return (
    <Box maxW='480px'>
      <Form method="post" action="/create">
        <FormControl isRequired mb='40px'> {/* Ajoute un asterisk rouge */}
          <FormLabel>Task name :</FormLabel> {/* Equivalent à label en html */}
          <Input type="text" name="title"/>
          <FormHelperText>Enter a description task name.</FormHelperText> {/* Desciptive text behind the input */}
        </FormControl>

        <FormControl mb='10px'>
          <FormLabel>Task despcription :</FormLabel>
          <Textarea 
          placeholder="Enter a detailed description for the task.."
          name="description"
          />
        </FormControl>

        <FormControl display='flex' alignItems='center' mb='40px'>
          <Checkbox
          name="isPriority"
          size='lg'
          />
          <FormLabel ml='10px' mb='0px'>Make this a priority task.</FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </Form>
    </Box>
    )
}

export const createAction = async ({ request }) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }

  console.log(task)

  return redirect('/')
}
