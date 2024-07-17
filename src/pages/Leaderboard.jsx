const Leaderboard = () => {
  const leaderboards = JSON.parse(localStorage.getItem("leaderboards")) || [];

  leaderboards.sort((a, b) => b.result - a.result);

  return (
    <div className="container leaderboard">
      <div className="header">Leaderboard</div>
      <table cellSpacing="0" cellPadding="0">
        {leaderboards.map((leaderboard, index) => (
          <tr key={index}>
            <td>
              <div className="circle">#{index + 1}</div>
            </td>
            <td className="td-full">
              <div className="name">{leaderboard.name}</div>
              <div className="result">
                {leaderboard.result.toFixed(0)} seconds
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Leaderboard;
