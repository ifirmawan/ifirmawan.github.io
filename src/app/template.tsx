import React from "react";

type Props = { children: React.ReactNode };

const DefaultTemplate: React.FC<Props> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24">
      {children}
    </main>
  );
};

export default DefaultTemplate;
