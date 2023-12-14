package com.knits.assetcare.utils;

import com.knits.assetcare.mapper.common.EntityMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.util.ReflectionTestUtils;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;


/**
 * Helper class for initializing instances of classes implementing {@link EntityMapper}.
 * This class facilitates the injection of real instances for fields annotated with {@code @Autowired}
 * within a given {@link EntityMapper} instance.
 *
 * @SuppressWarnings("rawtypes")
 */
@SuppressWarnings("rawtypes")
public class MapperHelper {

    /**
     * Initializes the provided {@link EntityMapper} instance and injects real instances for fields
     * annotated with {@code @Autowired}.
     *
     * @param mapperInstance The instance of {@link EntityMapper} to be initialized.
     * @throws InstantiationException If an error occurs while creating an instance.
     */
    public static <T extends EntityMapper> void initializeMapper(T mapperInstance) throws InstantiationException {
        injectFields(mapperInstance);
    }

    /**
     * Creates an instance of the given class and performs unchecked casting to the type of {@link EntityMapper}.
     * It is assumed that the implementation class name follows the convention of appending "Impl" to the interface name.
     *
     * @param clazz The class for which an instance is to be created.
     * @return An instance of the class, casted to the type of {@link EntityMapper}.
     * @throws InstantiationException If an error occurs while creating an instance.
     */
    @SuppressWarnings("unchecked")
    private static <T extends EntityMapper> T createInstance(Class<?> clazz) throws InstantiationException {
        try {
            String implClassName = clazz.getName() + "Impl";
            Class<?> implClass = Class.forName(implClassName);
            Constructor<?> constructor = implClass.getDeclaredConstructor();
            return (T) constructor.newInstance();
        } catch (Exception e) {
            throw new InstantiationException("Unable to create an instance of " + clazz.getName());
        }
    }

    /**
     * Injects real instances for fields annotated with {@code @Autowired} in the provided object.
     * The injection is performed using {@link ReflectionTestUtils}.
     *
     * @param instance The object for which fields are to be injected.
     * @throws InstantiationException If an error occurs while creating an instance.
     */
    private static void injectFields(Object instance) throws InstantiationException {
        Field[] fields = instance.getClass().getDeclaredFields();
        for (Field field : fields) {
            if (field.isAnnotationPresent(Autowired.class) && EntityMapper.class.isAssignableFrom(field.getType())) {
                Object realInstance = createInstance(field.getType());
                ReflectionTestUtils.setField(instance, field.getName(), realInstance);
                injectFields(realInstance);
            }
        }
    }
}