export const Fooder = () => {
  return (
    <footer className="absolute inset-x-0 bottom-0   border-t border-gray-200 font-light flex flex-col  justify-between items-center">
      <p className="text-gray-700 mb-6 lg:mb-0">
        JetCargo | by Appteck &copy; {new Date().getFullYear()}{" "}
      </p>
    </footer>
  );
};
