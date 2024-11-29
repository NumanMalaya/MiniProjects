export default function ProductHeading({value}) {
  return (
    <>
      <tr>
        <th scope="col" colSpan={2}>{value}</th>
      </tr>
    </>
  );
}
