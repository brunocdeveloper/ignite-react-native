import styled from 'styled-components/native';

export const Container = styled.View`
	align-items: center;
	flex: 1;
	justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.title};
	font-size: 24px;
`