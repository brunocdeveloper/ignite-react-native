import styled from 'styled-components/native';

export const Container = styled.View`
	align-items: center;
	flex: 1;
	justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
	color: purple;
	font-size: 24px;
	font-weight: bold;
`