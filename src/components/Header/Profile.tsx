import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && ( 
        <Box mr="4" textAlign="right">
          <Text>
            Matias Roque
          </Text>
          <Text color="gray.300" fontSize="small">
            matias@matias.com
          </Text>
        </Box>
      )}

    <Avatar 
      size="md" 
      name="Matias Roque" 
      src="https://github.com/matiassaccomori.png"
    />

  </Flex>
  );
}